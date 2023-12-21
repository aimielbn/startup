<script setup>
const query = gql`
  query MyQuery {
    produits {
      id
      titre
      slug
      description
      prix
      createdAt
      publishedAt
      updatedAt
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

const produits = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
produits.value = data.value.produits;
</script>

<template>
  <Container>
  <TitresH1>Produits</TitresH1>
  <p>
    Bienvenue sur notre page "Produits", le foyer de l'innovation et de
    l'excellence. Explorez notre sélection exceptionnelle d'articles
    soigneusement choisis pour inspirer, améliorer et simplifier votre
    quotidien. De la technologie avant-gardiste aux solutions élégantes,
    découvrez l'art de l'ingéniosité conçu pour rendre votre vie plus riche et
    plus pratique. Bienvenue dans l'univers de nos produits, où l'exceptionnel
    devient ordinaire.
  </p>
  <ul v-if="produits" class="">
    <ListsGrid>
    <li v-for="produit in produits" :key="produit.id" class="">
      <CardsUserCard>
      <NuxtLink :to="`/produits/${produit.slug}`" class="">
        <NuxtImg :src="produit.image.url" :alt="produit.nom" class="" />
        <TitresH3>
          {{ produit.titre }}
        </TitresH3>
        <TitresH4>{{ produit.prix }}€</TitresH4>
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
