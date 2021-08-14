import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import '../styles/components/Form.scss';

export default function Form() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  function openModal() {
    document.getElementById("lightbox").style.visibility = "visible";
    document.getElementById("lightbox").style.display = "block";
  }

  function fadeOut( el, mseconds ) {
  if(!el)
    return;
  if( mseconds ) {
    var opacity = 1;
    var timer = setInterval( function() {
      opacity -= 10 / mseconds;
      if( opacity <= 0 )
      {
        clearInterval(timer);
        opacity = 0;
        el.style.display = "none";
        el.style.visibility = "hidden";
      }
      el.style.opacity = opacity;
      el.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 10 );
  }
  else
  {
    el.style.opacity = 0;
    el.style.filter = "alpha(opacity=0)";
    el.style.display = "none";
    el.style.visibility = "hidden";
  }
}
    
  const onSubmit = data => {
    openModal(); 
    fadeOut(document.getElementById('lightbox'), 5000 );
    console.log('Nombre completo ', data.name);
    console.log('Email ', data.email);
    console.log('Celular ', data.phone);
    console.log('Edad ', data.age);
    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
    setValue("age", "");
  }
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <div id="lightbox" className="lightboxClass">
          <p>Tu información fue enviada con éxito, estaremos en contacto contigo</p>
        </div>

        <label htmlFor="name">Nombre completo*</label>
        <input id="name" placeholder="Manuel Contreras" {...register("name", { required: true, pattern: { value: /[a-záéíóúüñç]+/i } })} />
          {/* errors will return when field validation fails  */}
        <span>{errors.name?.type === 'required' && "El nombre completo es requerido"}</span>  
        <span>{errors.name?.type === 'pattern' && "Formato del nombre no válido"}</span>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email*</label>
        <input id="email" placeholder="mcontreras@hotmail.com" {...register("email", {required: true, pattern: { value: /\S+@\S+\.\S+/,} })} />
        <span>{errors.email?.type === 'required' && "El correo electrónico es requerido"}</span>
        <span>{errors.email?.type === 'pattern' && "Formato del email no válido"}</span>
      </div>

      <div className="form-field">
        <label htmlFor="phone">Celular*</label>
        <input id="phone"  placeholder="3102101010" {...register("phone", {required: true, pattern: { value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ } })} />
        <span>{errors.phone?.type === 'required' && "El celular es requerido" }</span>
        <span>{errors.phone?.type === 'pattern' && "Formato de celular no válido"}</span>
      </div>

      <div className="form-field">
        <label htmlFor="age">Edad*</label>
        <input id="age" placeholder="21" {...register("age", {required: true, pattern: { value: /^(100|1[8-9]|[2-9][0-9])$/ } })} />
        <span>{errors.age?.type === 'required' && "La edad es requerida"}</span>
        <span>{errors.age?.type === 'pattern' && "Formato de la edad no válido. La edad debe estar entre los 18 hasta los 100 años"}</span>
      </div> 

      <div className="form-field">
        <input className="button" type="submit" />
      </div>
    </form>
  );
}
