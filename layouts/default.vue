<template>
  <Head>
    <Title>Startup</Title>
    <Meta name="description" content="Startup" />
  </Head>
  <LayoutsBase>
    <template #navigation>
      <NavsNav>
        <template #logo>
          <TitresLogo>TechnoChef</TitresLogo>
        </template>

        <template #links>
          <LinksNavLink to="/">Accueil</LinksNavLink>
          <LinksNavLink to="/produits">Produits</LinksNavLink>
          <LinksNavLink to="/equipe">Équipe</LinksNavLink>
          <LinksNavLink to="/societe">Société</LinksNavLink>
          <LinksNavLink to="/contact">Contact</LinksNavLink>
          <LinksNavLink to="/articles">Blog</LinksNavLink>
        </template>
      </NavsNav>
    </template>

    <template #content>
      <slot />
    </template>

    <template #footer>
      <FootersBasic />
    </template>
  </LayoutsBase>
</template>
