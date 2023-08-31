import { useState, useEffect } from "react";
function useCountdown(date) {
  const [day, setDay] = useState('00');
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  const countDown = () => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();
    const interval = countDate - now;

    const secondValue = Math.floor((interval / 1000) % 60);
    const minuteValue = Math.floor((interval / (1000 * 60)) % 60);
    const hourValue = Math.floor((interval / (1000 * 60 * 60)) % 24);
    const dayValue = Math.floor(interval / (1000 * 60 * 60 * 24));

    // Formate os valores com zeros à esquerda quando forem menores que 10
    const formattedSecond = secondValue < 10 ? `0${secondValue}` : secondValue.toString();
    const formattedMinute = minuteValue < 10 ? `0${minuteValue}` : minuteValue.toString();
    const formattedHour = hourValue < 10 ? `0${hourValue}` : hourValue.toString();
    const formattedDay = dayValue < 10 ? `0${dayValue}` : dayValue.toString();

    setDay(formattedDay);
    setHour(formattedHour);
    setMinute(formattedMinute);
    setSecond(formattedSecond);
  }

  // Inicie a contagem regressiva quando o componente for montado
  useEffect(() => {
    const countdownInterval = setInterval(countDown, 1000);

    // Limpe o intervalo quando o componente for desmontado
    return () => {
      clearInterval(countdownInterval);
    };
  }, [date]);

  return [day, hour, minute, second];
}

export default useCountdown;
