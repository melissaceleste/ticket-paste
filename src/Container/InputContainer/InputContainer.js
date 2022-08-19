function InputContainer() {
  return (
    <div>
      <h1>Neues Ticket</h1>
      <section>
        <input type="text" placeholder="Ticket-Name" />
        <input type="date" placeholder="Erster Kontakt" />
        <div>
          in progress
          <div>
            <input type="date" placeholder="Erster Kontakt" />
            <input type="date" placeholder="Erster Kontakt" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default InputContainer;
