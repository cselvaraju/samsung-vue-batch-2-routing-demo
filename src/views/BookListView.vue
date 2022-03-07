<template>
  <div>
    <h3>Book List</h3>
    <ul>
      <li v-for="book in bookList" :key="book.id">
        <router-link :to="`/books/${book.id}`">
            {{ book.title }}
        </router-link>
      </li>
    </ul>
  </div>
  <!-- <router-view/> -->
</template>

<script>
export default {
  name: "BookListView",
  data() {
    return {
      bookList: [
        {
          id: 101,
          title: "The Brief History of Time",
          author: "Stephen Hawking",
        },
        { id: 102, title: "Nirmala", author: "Munshi Premchand" },
        {
          id: 103,
          title: "Java2 Complete Reference",
          author: "Herbert Schildt",
        },
      ],
    };
  },
};
</script>

<style>
</style>