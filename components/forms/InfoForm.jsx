function InfoForm(props) {
  const contactInfo = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <form onSubmit={contactInfo} id="info" data-type={props.type}>
      <div>
        <label htmlFor="firstname">Fornavn</label>
        <input required name="firstname" type="text" />
      </div>
      <div>
        <label htmlFor="lastname">Efternavn</label>
        <input required name="lastname" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input required name="email" type="email" />
      </div>
      <div>
        <label htmlFor="mobile">Mobil</label>
        <input defaultValue="+45" required name="mobile" type="tel" />
      </div>
      <div>
        <label htmlFor="address1">Adresse 1</label>
        <input required name="address1" type="" />
      </div>
      <div>
        <label htmlFor="address2">Adresse 2 (valgfri)</label>
        <input name="address2" type="text" />
      </div>
      <div>
        <label htmlFor="city">By</label>
        <input required name="city" type="text" />
      </div>
      <div>
        <label htmlFor="zip">Postnummer</label>
        <input required name="zip" type="text" />
      </div>
    </form>
  );
}

export default InfoForm;
