<script setup>
const query = gql`
  query MyQuery($slug: String!) {
    membre(where: { slug: $slug }) {
      id
      nom
      description
      slug
      createdAt
      publishedAt
      updatedAt
      photo {
        url(
          transformation: {
            image: { resize: { fit: crop, height: 1024, width: 1024 } }
          }
        )
      }
    }
  }
`;

const membre = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
membre.value = data.value.membre;
</script>

<template>
  <Head v-if="membre">
    <Title>{{ membre.nom }} - Détails du membre</Title>
    <Meta
      name="description"
      :content="`Découvrez des détails sur ${membre.nom}: ${membre.description}`"
    />
    <Meta property="og:title" :content="`${membre.nom} - Détails du membre`" />
    <Meta
      property="og:description"
      :content="`Découvrez des détails sur ${membre.nom}: ${membre.description}`"
    />
    <Meta property="og:image" :content="membre.photo.url" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="fr_FR" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="`${membre.nom} - Détails du membre`" />
    <Meta
      name="twitter:description"
      :content="`Découvrez des détails sur ${membre.nom}: ${membre.description}`"
    />
    <Meta name="twitter:image" :content="membre.photo.url" />
  </Head>

  <Container>
    <div v-if="membre" class="max-w-lg space-y-8 mx-auto">
      <TitresH2>{{ membre.nom }}</TitresH2>
      <CardsUserCard>
        <div>
          <NuxtImg :src="membre.photo.url" :alt="membre.nom" class="" />
        </div>
        <div class="pt-5">
          <p>{{ membre.description }}</p>
        </div>
      </CardsUserCard>
    </div>
  </Container>
</template>
