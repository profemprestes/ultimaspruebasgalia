/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves map information for a given location.
 *
 * @param location The location to center the map on.
 * @returns A promise that resolves to a URL of a static map image.
 */
export async function getMapUrl(location: Location): Promise<string> {
  // TODO: Implement this by calling an API.
  return 'https://via.placeholder.com/400x300?text=Map';
}
