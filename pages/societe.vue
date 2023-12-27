<script setup>
const query = gql`
  query Page {
    page(where: { slug: "societe" }) {
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

const contenuSociete = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuSociete.value = data.value.page;
</script>

<template>
  <Container>
  <TitresH1><i class="fa-solid fa-building-columns"></i> 
    {{ contenuSociete.titre }}
  </TitresH1>

  <p v-html="contenuSociete.texte.html"></p>
  </Container>
</template>
