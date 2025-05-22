/**
 * Metadata for Raspberry Pi Pico
 */
const pico = {
  id: 'pico',
  tags: ['microcontroller', 'rp2040', 'raspberry-pi', 'embedded', 'iot'],
  specs: {
    Microcontroller: 'RP2040 (Dual-core ARM Cortex-M0+ @ 133 MHz)',
    SRAM: '264 KB',
    Flash: '2 MB QSPI Flash',
    'GPIO Pins': '26 multi-function GPIO',
    'ADC Channels': '3 × 12-bit ADC',
    USB: 'USB 1.1 host/device',
    'Power Input': '1.8–5.5 V',
    'Operating Temperature': '-20°C to 85°C',
    Dimensions: '51 × 21 mm',
  },
  markdownFile: '/content/hardware/pico-extra.mdx',
}

module.exports = pico
