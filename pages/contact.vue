<script setup>
const query = gql`
  query Page {
    page(where: { slug: "contact" }) {
      createdAt
      id
      publishedAt
      slug
      titre
      updatedAt
      texte {
        html
      }
    }
  }
`;

const contenuContact = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuContact.value = data.value.page;
</script>

<template>
  <Container>
    <TitresH1> <i class="fa-solid fa-phone"></i>
      {{ contenuContact.titre }}
    </TitresH1>

    <p v-html="contenuContact.texte.html"></p>
    <p><TextesGras>Numéro : </TextesGras>+81 123 456 789</p>
    <p><TextesGras>E-mail : </TextesGras>technochef@bot.com</p>

    <TitresH3>Envoyez-nous un mail !</TitresH3>
    <InputsForm>
      <ul>
        <li>
          <InputsLabel>Nom : </InputsLabel>
          <input
            class="border-blue-950 px-2 py-1 border-2 rounded-full mb-5"
            type="text"
            id="name"
            name="user_name required"
          />
        </li>
        <li>
          <InputsLabel>E-mail : </InputsLabel>
          <input
            class="border-blue-950 px-2 py-1 border-2 rounded-full mb-5"
            type="email"
            id="mail"
            name="user_email required"
          />
        </li>
        <li>
          <InputsLabel>Message : </InputsLabel>
          <InputsTextarea
            class="border-blue-950 border-2 rounded-xl mb-5"
          ></InputsTextarea>
        </li>
      </ul>

      <BoutonsPrimaire type="submit">Envoyer</BoutonsPrimaire>
    </InputsForm>

    <TitresH2>Trouvez-nous ici !</TitresH2>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25924.78905075417!2d139.7563792!3d35.686883699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0c0b13f54d%3A0xb630953beee48188!2sChiyoda%2C%20Tokyo%2C%20Japon!5e0!3m2!1sfr!2sbe!4v1703677366120!5m2!1sfr!2sbe"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </Container>
</template>
