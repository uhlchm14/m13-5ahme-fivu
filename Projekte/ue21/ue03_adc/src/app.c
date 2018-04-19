#include "global.h"

#include <stdio.h>
#include <string.h>

#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>

#include "app.h"
#include "sys.h"

// defines
// ...

#define SW1_PRESSED ( (PINC & (1 << PC7))==0)

// declarations and definations

volatile struct App app;


// functions

void app_init (void)
{
  memset((void *)&app, 0, sizeof(app)); // Setzt ab der Adresse den Wert 0 für die gfröße den man angibt. alles was in app drinnen ist wird mit 0 initalisiert
  ADMUX = (1<<REFS0) | (1<<ADLAR) | 30;
  ADCSRA = (1<<ADEN) | (1<<ADPS2) | (1<<ADPS1); //| (1<<ADPS0);
  app.state = Ok;
}


//--------------------------------------------------------

void app_main (void)
{
  if(sys_clearEvent(APP_EVENT_ADC_MEASURED))
  {
    cli();
    volatile uint8_t vccfk = app.vccFK; // volatile = verhindert das Variable erst zum Schluss zugewiesen wird
    sei();
    uint8_t vk= vccfk >> 5; // Alternative vccfk/32
    uint8_t nk = (uint16_t)(vccfk & 0x1f) * 10/32;
    printf("VCC = %u.%01u    ERRCNT = %u ",vk,nk,app.adcErrCnt);
    printf(" DecFilter: %04x   ",app.decFilterSum);  
    printf("State = %d  \r",app.state);
    printf("  \r");
  }
}

//--------------------------------------------------------

void app_task_1ms (void) 
{
  static uint8_t adcStarted = 0;
  static uint8_t decFiltCnt = 0;
  if(adcStarted)
  {
    if(ADCSRA & (1 << ADIF))
  {
      uint8_t vccfk = (312*32)/ADCH;
      app.decFilterSum += vccfk;
      decFiltCnt++;
      if(decFiltCnt >= 20)
      {
        app.vccFK = app.decFilterSum / 20;
        decFiltCnt = 0;
        app.decFilterSum = 0;
        sys_setEvent(APP_EVENT_ADC_MEASURED);
      }
      if(SW1_PRESSED)
        app.vccFK = 0x70; // 011.10000 = 3.5V
      
    ADCSRA |= (1 << ADIF); //clear ADIF flag
    sys_setEvent(APP_EVENT_ADC_MEASURED);
  }
    else if( app.adcErrCnt < 0xff)
    {
      app.adcErrCnt++;
      sys_setEvent(APP_EVENT_ADC_MEASURED);
    }
  }
    
  ADCSRA |= (1<<ADSC);
  adcStarted = 1;
}

void app_task_2ms (void) {}
void app_task_4ms (void) {}
void app_task_8ms (void) 
{
  static uint8_t timer = 0;
  
  switch(app.state)
  {
  case Ok:
    sys_setLed(0,0);
    sys_setAllLeds(0);
    if(app.vccFK < 0x80)//100.00000 = 4V
      app.state= UnderVoltage;
    break;
    
  case UnderVoltage:
    sys_setLed(0,1);
    sys_setAllLeds(1);
    if(app.vccFK>0x90) //100.0000 = 4.5V
      app.state= VoltageOK;
    timer=0;
    break;
    
  case VoltageOK:
    
    sys_setAllLeds(0);
    sys_setLed(0,1);
    if(app.vccFK < 0x80)//100.00000 = 4V
      app.state= UnderVoltage;
    timer++;
    if(timer>= 125)
      app.state = Ok;
    break;
    
  default:
    if(app.stateErrCnt < 0xff)
      app.stateErrCnt++;
    app.state = Ok;
    break;
  }
}
void app_task_16ms (void) {}
void app_task_32ms (void) {}
void app_task_64ms (void) {}
void app_task_128ms (void) {}



