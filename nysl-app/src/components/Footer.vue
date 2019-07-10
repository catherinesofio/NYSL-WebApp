<template>
  <footer>
    <p>Made by <a href="https://ar.linkedin.com/in/catalina-sofio-avogadro">Catherine Sofio</a></p>
  </footer>
</template>

<style>
footer {
    width: 100%;
    padding: 1em;

    position: absolute;
    bottom: 0;

    margin: auto;

    text-align: center;
    align-self: center;
    margin: auto;

    color: var(--title-color);

    z-index: var(--nav-layer);
}

footer a, p {
    background: rgba(0,0,0,0);
    border-width: 0;
    box-shadow: none;
}

footer a, p {
    margin: 0;
    padding: 0;

    font-size: 1em;
    font-weight: normal;

    text-align: center;
    text-shadow: var(--shadow);
}
</style>