type Button = {
  name: string;
  estilos: string;
};

function GeneralButton({ name, estilos }: Button) {
  return (
    <div className="">
      <button className={estilos}>{name}</button>
    </div>
  );
}

export default GeneralButton;
