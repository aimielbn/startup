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
  <Head v-if="article">
    <Title>{{ article.titre }} - Détails de l'article</Title>
    <Meta
      name="texte"
      :content="`Découvrez des détails sur ${article.titre}: ${article.texte}`"
    />
    <Meta
      property="og:title"
      :content="`${article.titre} - Détails de l'article`"
    />
    <Meta
      property="og:texte"
      :content="`Découvrez des détails sur ${article.titre}: ${article.texte}`"
    />
    <Meta property="og:image" :content="article.image.url" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="fr_FR" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta
      name="twitter:title"
      :content="`${article.titre} - Détails de l'article`"
    />
    <Meta
      name="twitter:texte"
      :content="`Découvrez des détails sur ${article.titre}: ${article.texte}`"
    />
    <Meta name="twitter:image" :content="article.image.url" />
  </Head>

  <Container>
    <div v-if="article" class="max-w-lg space-y-8 mx-auto">
      <TitresH2>{{ article.titre }}</TitresH2>
      <CardsUserCard>
        <div>
          <NuxtImg :src="article.image.url" :alt="article.titre" class="" />
        </div>
        <div class="pt-5">
          <p v-html="article.texte.html"></p>
        </div>
      </CardsUserCard>
    </div>
  </Container>
</template>
