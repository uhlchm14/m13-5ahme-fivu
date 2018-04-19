#ifndef APP_H_INCLUDED
#define APP_H_INCLUDED

// declarations

enum App_State {Ok, UnderVoltage, VoltageOK};

struct App
{
  uint8_t vccFK; //Komma zwischen Bit 5 und Bit 4, vccFK/32 = vcc in Volt
  uint8_t adcErrCnt; 
  uint8_t stateErrCnt;
  uint16_t decFilterSum;
  enum App_State state;
};

extern volatile struct App app;


// defines

#define APP_EVENT_ADC_MEASURED   0x01
#define APP_EVENT_1   0x02
#define APP_EVENT_2   0x04
#define APP_EVENT_3   0x08
#define APP_EVENT_4   0x10
#define APP_EVENT_5   0x20
#define APP_EVENT_6   0x40
#define APP_EVENT_7   0x80


// functions

void app_init (void);
void app_main (void);

void app_task_1ms   (void);
void app_task_2ms   (void);
void app_task_4ms   (void);
void app_task_8ms   (void);
void app_task_16ms  (void);
void app_task_32ms  (void);
void app_task_64ms  (void);
void app_task_128ms (void);

#endif // APP_H_INCLUDED
