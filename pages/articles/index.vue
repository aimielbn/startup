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
    <TitresH1><i class="fa-solid fa-newspaper"></i> Articles</TitresH1>
    <ul v-if="articles" class="">
      <ListsGrid>
        <li v-for="article in articles" :key="article.id" class="">
          <CardsUserCard>
            <NuxtLink :to="`/articles/${article.slug}`" class="">
              <NuxtImg :src="article.image.url" :alt="article.nom" class="" />
              <TitresH3>
                {{ article.titre }}
              </TitresH3>
            </NuxtLink>
          </CardsUserCard>
        </li>
      </ListsGrid>
    </ul>

    <ul v-else>
      <li>Chargement...</li>
    </ul>
  </Container>
</template>
