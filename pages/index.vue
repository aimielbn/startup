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

    <div
      class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-8 my-8"
    >
      <CardsIconCard to="/produits">Produits</CardsIconCard>
      <CardsIconCard to="/contact">Contact</CardsIconCard>
      <CardsIconCard to="/articles">Blog</CardsIconCard>
    </div>
  </Container>
</template>
