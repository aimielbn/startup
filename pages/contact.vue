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
  </Container>
</template>
