<script setup>
const query = gql`
  query Page {
    page(where: { slug: "accueil" }) {
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

const contenuAccueil = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuAccueil.value = data.value.page;
</script>

<template>
  <Container>
    <TitresH1>
      {{ contenuAccueil.titre }}
    </TitresH1>

    <div v-html="contenuAccueil.texte.html"></div>
  </Container>
</template>
