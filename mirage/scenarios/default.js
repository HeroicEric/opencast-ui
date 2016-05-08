export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  let podcasts = server.createList('podcast', 10);

  podcasts.forEach((podcast) => {
    server.createList('episode', 4, { podcastId: podcast.id });
  });
}
