const esp32 = {
  id: 'esp32',
  tags: ['wifi', 'bluetooth', 'dual-core', 'microcontroller', 'xtensa'],
  specs: [
    { name: 'Architecture', value: 'Xtensa Dual-Core 32-bit LX6' },
    { name: 'Clock Speed', value: '240 MHz' },
    { name: 'Flash', value: '4 MB' },
    { name: 'SRAM', value: '520 KB' },
    { name: 'Wi-Fi', value: '802.11 b/g/n' },
    { name: 'Bluetooth', value: 'Bluetooth v4.2 BR/EDR & BLE' },
    { name: 'GPIO Pins', value: '34' },
    { name: 'ADC Channels', value: '18' },
    { name: 'DAC Channels', value: '2' },
    { name: 'SPI Interfaces', value: '4' },
    { name: 'I²C Interfaces', value: '2' },
    { name: 'UART Interfaces', value: '3' },
    { name: 'Operating Voltage', value: '3.0V – 3.6V' },
    { name: 'Operating Temperature', value: '−40°C to 125°C' },
  ],
  markdownFile: '/hardware-content/esp32-extra.mdx',
}

module.exports = esp32
