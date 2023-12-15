<script setup>
const query = gql`
  query Page {
    page(where: { slug: "equipe" }) {
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

const contenuEquipe = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuEquipe.value = data.value.page;
</script>

<template>
  <h2 class="text-2xl">
    {{ contenuEquipe.titre }}
  </h2>

  <div v-html="contenuEquipe.texte.html"></div>
</template>
