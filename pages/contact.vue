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
    <TitresH1>
      {{ contenuContact.titre }}
    </TitresH1>

    <p v-html="contenuContact.texte.html"></p>

    <TitresH3>Envoyez-nous un mail !</TitresH3>
    <InputsForm>
      <ul>
        <li>
          <InputsLabel>Nom : </InputsLabel>
          <input class="border-blue-950 border-2 rounded-xl mb-5" type="text" id="name" name="user_name required" />
        </li>
        <li>
          <InputsLabel>E-mail : </InputsLabel>
          <input class="border-blue-950 border-2 rounded-xl mb-5" type="email" id="mail" name="user_email required" />
        </li>
        <li>
          <InputsLabel>Message : </InputsLabel>
          <InputsTextarea class="border-blue-950 border-2 rounded-xl mb-5"></InputsTextarea>
        </li>
      </ul>

      <BoutonsPrimaire type="submit">Envoyer</BoutonsPrimaire>

    </InputsForm>
  </Container>
</template>
