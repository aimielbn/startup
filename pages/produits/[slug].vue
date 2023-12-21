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
  <Container>
  <div v-if="produit" class="">
    <TitresH2>{{ produit.titre }}</TitresH2>
      <div>
        <NuxtImg :src="produit.image.url" :alt="produit.titre" class="" />
      </div>
      <div>
        <TitresH3>{{ produit.prix }}€</TitresH3>
        <p>{{ produit.description }}</p>
      </div>
    </div>
  </Container>
</template>
