<script setup>
const query = gql`
  query Produits {
    produits {
      id
      titre
      slug
      prix
      description
      createdAt
      publishedAt
      updatedAt
      image {
        url(
          transformation: {
            image: { resize: { fit: crop, height: 1024, width: 1024 } }
          }
        )
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
