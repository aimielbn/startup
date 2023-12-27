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
      <i class="fa-solid fa-house"></i>
      {{ contenuAccueil.titre }}
    </TitresH1>

    <div v-html="contenuAccueil.texte.html"></div>

    <div
      class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-8 my-8"
    >
      <CardsIconCard to="/produits"
        ><template #icon> <i class="fa-solid fa-burger"></i> </template
        >Produits</CardsIconCard
      >
      <CardsIconCard to="/contact"
        ><template #icon> <i class="fa-solid fa-phone"></i> </template
        >Contact</CardsIconCard
      >
      <CardsIconCard to="/articles"
        ><template #icon> <i class="fa-solid fa-newspaper"></i> </template
        >Blog</CardsIconCard
      >
    </div>
  </Container>
</template>
