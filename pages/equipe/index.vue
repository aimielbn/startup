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
    <Container>
  <TitresH1><i class="fa-solid fa-people-group"></i> Équipe</TitresH1>

  <ul v-if="membres" class="">
    <ListsGrid>
    <li v-for="membre in membres" :key="membre.id" class="">
        <CardsUserCard>
      <NuxtLink :to="`/equipe/${membre.slug}`" class="">
        <NuxtImg :src="membre.photo.url" :alt="membre.nom" class="" />
        <TitresH3>
          {{ membre.nom }}
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
