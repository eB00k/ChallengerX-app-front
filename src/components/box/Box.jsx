function Box({ day, date, status, is_done, percentage }) {
  const styleBox = `bg-main-clr flex flex-col aspect-square w-full min-w-10 max-w-20 items-center justify-center justify-self-center rounded-lg opacity-${percentage}`;
  return (
    <div className={styleBox}>
      <h3>{day}</h3>
      <small>{date}</small>
    </div>
  );
}

export default Box;
