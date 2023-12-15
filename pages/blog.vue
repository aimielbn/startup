<script setup>
const query = gql`
  query Page {
    page(where: { slug: "blog" }) {
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

const contenuBlog = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuBlog.value = data.value.page;
</script>

<template>
  <h2 class="text-2xl">
    {{ contenuBlog.titre }}
  </h2>

  <div v-html="contenuBlog.texte.html"></div>
</template>
