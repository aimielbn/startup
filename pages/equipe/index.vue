<script setup>
const query = gql`
  query MyQuery {
    membres {
      id
      nom
      slug
      description
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

const membres = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
membres.value = data.value.membres;
</script>

<template>
  <TitresH2>Équipe</TitresH2>

  <ul v-if="membres" class="">
    <li v-for="membre in membres" :key="membre.id" class="">
      <NuxtLink :to="`/membres/${membre.slug}`" class="">
        <NuxtImg :src="membre.image.url" :alt="membre.nom" class=""/>
        <h2 class="text-2xl">
          {{ membre.nom }}
        </h2>
        <p>{{ membre.description }}</p>
      </NuxtLink>
    </li>
  </ul>

  <ul v-else>
    <li>Chargement...</li>
  </ul>
</template>
