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
  <h2 class="text-2xl">
    {{ contenuContact.titre }}
  </h2>

  <div v-html="contenuContact.texte.html"></div>
</template>
