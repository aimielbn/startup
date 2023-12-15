<script setup>
const query = gql`
  query Page {
    page(where: { slug: "produits" }) {
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

const contenuProduits = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuProduits.value = data.value.page;
</script>

<template>
  <h2 class="text-2xl">
    {{ contenuProduits.titre }}
  </h2>

  <div v-html="contenuProduits.texte.html"></div>
</template>
