<template>
  <v-menu
      open-on-hover
      bottom
      offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          color="blue darken-4"
          text
          class="">
        Manager
      </v-btn>
    </template>
    <v-list>
      <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link">
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>

export default {
  name: 'MangerMenu',
  data: () => ({
    selectedItem: 1,
    items: [
      {title: 'Orders', link: '/cms/order/'},
      {title: 'Products', link: '/cms/product/'},
      {title: 'Customers', link: '/cms/customer/'},
    ],
  }),
}
</script>