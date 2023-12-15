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
  <h2 class="text-2xl">
    {{ contenuSociete.titre }}
  </h2>

  <div v-html="contenuSociete.texte.html"></div>
</template>
