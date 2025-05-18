/**
 * Hardware devices catalog
 *
 * This file exports a flat array of device records, each containing:
 * - id: Unique identifier used in URLs and for referencing the device
 * - name: Display name of the device
 * - category: Category identifier (matches values in categories.js)
 * - image: Path to the device image (relative to /img/hardware/)
 * - overview: Brief description of the device
 */

const devices = [
  {
    id: 'esp32',
    name: 'ESP32',
    category: 'chips',
    image: 'esp32.jpg',
    overview:
      'The ESP32 is a powerful, dual-core microcontroller with integrated Wi-Fi and Bluetooth capabilities. It features extensive peripheral support and is ideal for IoT applications requiring wireless connectivity.',
  },
  {
    id: 't5-ai',
    name: 'Tuya T5-AI',
    category: 'boards',
    image: 'tuya-t5ai.jpg',
    overview:
      'Tuya T5AI-Board is a voice and screen multi-interaction development board based on the T5-E1-IPEX, an embedded Wi-Fi and Bluetooth combo module developed by Tuya Smart. Equipped with two microphones and one speaker, the development board supports voice recognition and playback, offering voice interaction capabilities.',
  },
  {
    id: 'pico',
    name: 'Raspberry Pi Pico',
    category: 'boards',
    image: 'pico.jpg',
    overview:
      'The Raspberry Pi Pico is a microcontroller board based on the RP2040 chip. It offers high performance, low power consumption, and a rich peripheral set, making it suitable for a wide range of embedded projects.',
  },
]

export default devices
