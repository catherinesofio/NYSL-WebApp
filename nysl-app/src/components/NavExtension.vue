<template>
  <section class="extension">
    <a id="user" class="user-ignore" v-on:click="expand">
      <img
        class="user-ignore"
        src="https://vignette.wikia.nocookie.net/shingeki-no-kyojin/images/e/ea/Eren_Jaeger_-_Anime.png/revision/latest?cb=20190429004402&path-prefix=es"
      />
    </a>
    <div>
      <ul v-show="!user && expanded">
        <li>
          <a v-on:click="openPopup">
            <img
              class="user-ignore"
              src="https://png.pngtree.com/svg/20170802/dab5c3329c.svg"
            />
          </a>
        </li>
        <li>
          <a v-on:click="openPopup">
            <img
              class="user-ignore"
              src="https://static.thenounproject.com/png/6478-200.png"
            />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul v-show="user && expanded">
        <li>
          <a>
            <img
              class="user-ignore"
              src="https://images-eu.ssl-images-amazon.com/images/I/314WJcne5sL.png"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              class="user-ignore"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qFleD-5ZIvMnwAcpWvFiXegH4Ub5CFfuxn5XqBnd3aW_AtjYUA"
            />
          </a>
        </li>
      </ul>
    </div>
    <UserPopup />
  </section>
</template>

<script>
import UserPopup from "@/components/UserPopup.vue";

let user;

export default {
  name: "NavExtension",
  data: function() {
    return {
      user: false,
      expanded: false
    };
  },
  components: {
    UserPopup
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
    },
    openPopup() {
      this.expanded = false;
      document.getElementById("user-popup").style.display = "block";
    }
  },
  mounted() {
    user = document.getElementById("user");

    window.addEventListener(
      "touchstart",
      e => {
        if (e.target.className !== "user-ignore") {
          this.expanded = false;

          /*if (e.target.tagName != "A") {
            user.style.opacity = 0.5;
            user.style.width = "2.85em";
            user.style.height = "2.85em";
            user.style.marginRight = "0.55em";
            user.style.marginBottom = "0.55em";
          }*/
        }
      },
      true
    );

    /*window.addEventListener(
      "touchend",
      () => {
        user.style.opacity = 1;
        user.style.width = "3em";
        user.style.height = "3em";
        user.style.marginRight = "0.5em";
        user.style.marginBottom = "0.5em";
      },
      true
    );*/

    window.addEventListener(
      "scroll",
      () => {
        this.expanded = false;
      },
      true
    );
  }
};
</script>

<style>
.extension,
.extension * {
  z-index: var(--nav-layer);
}

.extension {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;

  overflow: hidden;
}

.extension ul {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 4.25em;
  height: 10em;
  margin-bottom: 3em;
  margin-right: 0.95em;
  position: fixed;
  bottom: 0;
  right: 0;

  background-color: var(--third-color);
  border-color: var(--sec-color);
  border-width: 0.2em;
  border-style: solid;
  box-shadow: var(--shadow);

  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
}

.extension li {
  margin: auto;
  margin-bottom: 0;
  margin-top: 0.5em;
  padding: 0;

  text-align: center;
}

.extension ul li:first-of-type {
  margin-top: 0.55em;
}

.extension li a {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: 0;
  padding: 0;

  border-radius: 100px;
}

.extension li a img {
  padding: 0;

  mix-blend-mode: overlay;
}

#user {
  width: 3em;
  height: 3em;
  position: fixed;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  padding: 0;
  bottom: 0;
  right: 0;

  text-align: center;

  border-radius: 100px;

  z-index: var(--map-layer);
}

#user a {
  width: 1.5em;
  height: 1.5em;
  padding: 0;
  margin: 0;

  border-radius: 100px;
}

a img {
  width: 100%;
  margin: auto;
  padding: 0.1em;

  border-radius: 100px;

  object-fit: scale-down;
}
</style>