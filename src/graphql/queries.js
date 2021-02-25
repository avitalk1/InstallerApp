/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstllerInfo = /* GraphQL */ `
  query GetInstllerInfo($id: ID!) {
    getInstllerInfo(id: $id) {
      id
      installerUsername
      QRLink
      HouseID
      createdAt
      updatedAt
    }
  }
`;
export const listInstllerInfos = /* GraphQL */ `
  query ListInstllerInfos(
    $filter: ModelInstllerInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstllerInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        installerUsername
        QRLink
        HouseID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
