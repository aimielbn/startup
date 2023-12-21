<script setup>
const query = gql`
  query Articles {
    articles {
      id
      titre
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

const articles = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
articles.value = data.value.articles;
</script>

<template>
  <Container>
    <TitresH1>Articles</TitresH1>
    <ul v-if="articles" class="">
      <li v-for="article in articles" :key="article.id" class="">
        <CardsUserCard>
          <NuxtLink :to="`/articles/${article.slug}`" class="">
            <NuxtImg :src="article.image.url" :alt="article.nom" class="" />
            <h2 class="text-2xl">
              {{ article.titre }}
            </h2>
          </NuxtLink>
        </CardsUserCard>
      </li>
    </ul>

    <ul v-else>
      <li>Chargement...</li>
    </ul>
  </Container>
</template>
