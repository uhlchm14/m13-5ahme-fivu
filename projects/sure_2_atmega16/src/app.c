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
#define SW1_PRESSED (PINC & (1<< PC7) == 0)

// declarations and definations

volatile struct App app;

uint32_t sw_timer; //Achtung name muss eindeutig sein
uint8_t pressed; //Achtung name muss eindeutig sein

// functions

void app_init (void)
{
  memset((void *)&app, 0, sizeof(app));
  sw_timer = 0;
  pressed = 0;
  DDRC &= ~(1 << PC7);
  ADMUX = (1<< REFS0) | (1<<ADLAR) | 30;
  ADCSRA = (1<<ADEN) | (1<<ADPS2) | (1<<ADPS1) | (1<<ADPS0);
}


//--------------------------------------------------------

void app_main (void)
{
  cli();
  float vcc = app.vcc;
  sei();
  
  int vk = vcc;
  int nk = (int) ((vcc - (float)vk)*100);
  printf("%lu vcc = %d.%02dV \r", (unsigned long) sw_timer, (int) vk, nk);
  _delay_ms(20); // schont die serielle Schnittstelle -> Auslastung des Systems
}

//--------------------------------------------------------

void app_task_1ms (void) 
{
  if(SW1_PRESSED)
  {
    sw_timer ++;
  }
  // Auslesen der Messung
  // uint8_t mv = ADCH; 
  float vcc = (256.0*1.22) / ADCH;
  app.vcc = vcc;
  // starten der ADC Messung 
  ADCSRA |= (1<<ADSC);
}
void app_task_2ms (void) {}
void app_task_4ms (void) {}
void app_task_8ms (void) {}
void app_task_16ms (void) {}
void app_task_32ms (void) {}
void app_task_64ms (void) {}
void app_task_128ms (void) 
{
  static uint8_t counter = 0;
  counter ++;
  if(counter >= 5)
  {
    sys_toggleLed(0);
    counter = 0;
  }
}



