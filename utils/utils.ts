export const formateaFecha = (fecha: Date) => {
  const date = new Date();
  const day = `0${date.getDate()}`.slice(-2); //("0"+date.getDate()).slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
export const extraeHora = (fecha: Date) => {
  const date = new Date();
  const hora = `0${date.getHours()}`.slice(-2); //("0"+date.getDate()).slice(-2);
  const minuto = `0${date.getMinutes() + 1}`.slice(-2);
  const segundo = `0${date.getSeconds() + 1}`.slice(-2);


  return `${hora}:${minuto}:${segundo}`;
};
