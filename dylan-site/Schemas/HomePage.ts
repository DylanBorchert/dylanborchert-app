import { gql } from "graphql-tag";

export default gql`
	query {
		homePage {
			data {
				attributes {
					title
					tags
					shuffle_tags
					content {
						__typename
						... on ComponentGeneralHighlightProjects {
							id
							projects {
								data {
									attributes {
										UID
										title
										summary
										postDate
										createdAt
										publishedAt
										tags {
											data {
												attributes {
													tag
													UID
												}
											}
										}
									}
								}
							}
						}
						... on ComponentGeneralHighlightBlogs {
							id
							blogs {
								data {
									attributes {
										UID
										title
										summary
										postDate
										createdAt
										publishedAt
										tags {
											data {
												attributes {
													tag
													UID
												}
											}
										}
									}
								}
							}
						}
						... on ComponentGeneralMarkdown {
							id
							text
						}
					}
				}
			}
		}
	}
`;
