<template>
  <div class="flex flex-col bg-white">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Employee</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Last login</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Department</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Status</th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only"></span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
              v-for="user in users"
              :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img :src="user.profile_img" class="h-10 w-10 rounded-full" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.first_name + " " + user.last_name}}
                      </div>
                      <div class="text-sm text-gray-400">
                        {{ user.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ formatDate(user.sessions) }}</div>
                  <div class="text-sm text-gray-500">{{ timeSince(user.sessions) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold text-gray-500">
                    {{user.department}}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-green-500" v-if="user.status">
                  Activo
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-red-500" v-else>
                    Inactivo
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchUsers()
  },

  data() {
    return {
      name: "Table",
      users: []
    }
  },

  methods: {
    // Users
    fetchUsers: function () {
      let self = this; // scope backup
      fetch("/api/users")
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let usersResponse = data.users;
          let users = [];
          usersResponse.map((user, key) => {
            if(key < 5) {
              user.sessions = self.getLastSession(user.sessions);
              users.push(user)
            }
          });
          self.users = users;
        })
        .catch( error => { 
          console.log(error);
        });
    },

    formatDate(date) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames[date.getMonth()] + " " + date.getDate()  + ", " + date.getFullYear();
    },

    getLastSession: function(sessions){
      let lastSession = 0;
      sessions.map((session) => { // session in ISO format
        session = new Date(session); // convert session ISO to date
        if(session.getTime() > lastSession){ // .getTime() returns TIMESTAMP
          lastSession = session; // replace value
        }
      });
      return lastSession;
    },

    timeSince: function (date) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = seconds / 31536000;
      if (interval > 1) {
        return Math.floor(interval) + " years ago";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months ago";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days ago";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours ago";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
      }
      return Math.floor(seconds) + " seconds ago";
    }
  }
};
</script>

<style>

</style>