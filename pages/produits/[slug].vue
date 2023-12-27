<script setup>
const query = gql`
  query MyQuery($slug: String!) {
    produit(where: { slug: $slug }) {
      id
      titre
      description
      slug
      createdAt
      publishedAt
      updatedAt
      prix
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

const produit = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
produit.value = data.value.produit;
</script>

<template>
  <Head v-if="produit">
    <Title>{{ produit.titre }} - Détails du produit</Title>
    <Meta
      name="description"
      :content="`Découvrez des détails sur ${produit.titre}: ${produit.description}`"
    />
    <Meta
      property="og:title"
      :content="`${produit.titre} - Détails du produit`"
    />
    <Meta
      property="og:description"
      :content="`Découvrez des détails sur ${produit.titre}: ${produit.description}`"
    />
    <Meta property="og:image" :content="produit.image.url" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="fr_FR" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta
      name="twitter:title"
      :content="`${produit.titre} - Détails du produit`"
    />
    <Meta
      name="twitter:description"
      :content="`Découvrez des détails sur ${produit.titre}: ${produit.description}`"
    />
    <Meta name="twitter:image" :content="produit.image.url" />
  </Head>

  <Container>
    <div v-if="produit" class="max-w-lg space-y-8 mx-auto">
      <TitresH2>{{ produit.titre }}</TitresH2>
      <CardsUserCard>
        <NuxtImg :src="produit.image.url" :alt="produit.titre" class="" />
        <TitresH3>{{ produit.prix }}€</TitresH3>
        <p>{{ produit.description }}</p>
      </CardsUserCard>
    </div>
  </Container>
</template>
