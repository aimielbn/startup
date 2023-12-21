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
  <div v-if="membre" class="">
    <h2>{{ membre.nom }}</h2>
    <div class="">
      <div>
        <NuxtImg :src="membre.photo.url" :alt="membre.nom" class="" />
      </div>
      <div>
        <p>{{ membre.description }}</p>
      </div>
    </div>
  </div>
</template>
