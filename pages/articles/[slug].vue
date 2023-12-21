<script setup>
const query = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      titre
      texte {
        html
      }
      slug
      createdAt
      publishedAt
      updatedAt
      image {
        url(
          transformation: {
            image: { resize: { fit: crop, height: 1024, width: 1024 } }
            document: { output: { format: webp } }
          }
        )
      }
    }
  }
`;

const article = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
article.value = data.value.article;
</script>

<template>
    <Container>
  <div v-if="article" class="">
    <TitresH2>{{ article.titre }}</TitresH2>
    <div class="">
      <div>
        <NuxtImg :src="article.image.url" :alt="article.titre" class="" />
      </div>
      <div>
        <p v-html="article.texte.html"></p>
      </div>
    </div>
  </div>
  </Container>
</template>
