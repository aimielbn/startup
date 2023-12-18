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
  <div v-if="produit" class="">
    <h2>{{ produit.titre }}</h2>
    <div class="">
      <div>
        <NuxtImg :src="produit.image.url" :alt="produit.titre" class="" />
      </div>
      <div>
        <p>{{ produit.prix }}€</p>
        <p>{{ produit.description }}</p>
      </div>
    </div>
  </div>
</template>
