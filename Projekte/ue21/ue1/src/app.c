#include "global.h"

#include <stdio.h>
#include <string.h>

#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>

#include "app.h"
#include "sys.h"

// defines

// SW1 == PC7   Port C, Bit 7
#define SW1 (DDRC &= ~(1<< PC7));

// declarations and definations

volatile struct App app;
uint32_t sw_timer;  // Achtung! Name muss eindeutig sein
uint8_t pressed = 0;

// functions

void app_init (void)
{
  memset((void *)&app, 0, sizeof(app));
  sw_timer = 0;
  DDRC &= ~(1 << PC7);    // DDRC &= 0x7f;   ist genau das Gleiche    Bit löschen
  ADMUX = (1<<REFS0) | (1<<ADLAR) | 30;
  ADCSRA = (1<<ADEN) | (1<<ADPS2) | (1<<ADPS1); //| (1<<ADPS0);
}


//--------------------------------------------------------

void app_main (void)
{
  cli();
  //Variante -> struct App appCopy = app;
  float vcc = app.vcc;
  uint8_t adch = app.adch;
  sei();
  uint8_t vk = (uint8_t) vcc;
  int nk = (int)((vcc -(float)vk)*100);
    printf("%lu  ADCH = 0x%02x  vcc = %d.%02d V  \r", (unsigned long)sw_timer, adch, (int)vk, nk);
    _delay_ms(25); //schon serielle Schnittstelle -> Auslastung des Systems
}

//--------------------------------------------------------

#define SW1_PRESSED (PINC & (1<<PC7) == 0) // Taster abfragen


void app_task_1ms (void)
{
  static uint32_t timer = 0;
  if(!SW1_PRESSED)
  {
    timer = 0;
  }
  else
  {
    timer++;
    sw_timer = timer;
  }
  
  //Auslesen der Messung vom letzten task_1ms Durchlauf
  
  //uint8_t mv = ADCH;
  float vcc = (256.0 * 1.22) / ADCH;
  app.vcc = vcc;
  
  
  ADCSRA |= (1 << ADSC);
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
  counter++;
  if(counter >= 5)
  {
    sys_toggleLed(0);
    counter = 0;
  }
}



