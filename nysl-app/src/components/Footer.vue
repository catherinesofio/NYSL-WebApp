<template>
  <footer>
    <p>
      Made by
      <a href="https://ar.linkedin.com/in/catalina-sofio-avogadro">Catherine Sofio</a>
    </p>
  </footer>
</template>

<style>
footer {
  width: 100%;
  padding: 1em;
  margin: auto;
  position: absolute;
  bottom: 0;

  text-align: center;
  align-self: center;

  color: var(--title-color);

  z-index: var(--back-layer)!important;
}

footer a,
p {
  background: rgba(0, 0, 0, 0);
  box-shadow: none;

  border-width: 0;
}

footer a,
p {
  margin: 0;
  padding: 0;

  font-size: 1em;
  font-weight: normal;
  text-align: center;
  text-shadow: var(--shadow);
}
</style>