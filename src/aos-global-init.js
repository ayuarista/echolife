import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  AOS.init({
    once: true, // Only animate once per element
    duration: 700,
    easing: 'ease-out-cubic',
    offset: 40,
    mirror: false,
  });
}
