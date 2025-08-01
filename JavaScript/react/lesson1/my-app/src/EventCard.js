function EventCard({name,date,location}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
}

export default EventCard;
