# **Project Requirements Document: Connection Metadata Compare Integration**

The integration allows users to compare connection metadata by selecting connections in the FieldTwin Design environment. Use documentation to implement the integration. Metadata object definitions can be found in the [FieldTwin Design API documentation](https://api.fieldtwin.com/#api-Connections-GetConnections).

## User Requirements

| Requirement ID | Description | User Story | Expected Behavior/Outcome |
|---------------|-------------|------------|---------------------------|
| UR001 | Display available connections | As a user, I want to see all available connections in the current project. | The system should display a list of connections with their basic information (ID, type, label). |
| UR002 | Add connections to comparison | As a user, I want to select connections to compare their metadata. | The system should provide "Add to Compare" buttons for each connection. Users can select up to 2 connections for comparison. |
| UR003 | View metadata differences | As a user, I want to see the differences between two selected connections' metadata. | The system should display a comparison table below the connection list showing side-by-side metadata differences between the two selected connections. |
| UR004 | Clear comparison selection | As a user, I want to clear my selection and start over. | The system should provide a "Clear Selection" button to remove all selected connections and hide the comparison table. |
| UR005 | Visual indication of selected connections | As a user, I want to see which connections I have selected for comparison. | The system should visually highlight selected connections and show a count of selected connections (e.g., "2 connections selected"). |

## User Interface Requirements

| Requirement ID | Description | User Story | Expected Behavior/Outcome |
|---------------|-------------|------------|---------------------------|
| UI001 | Connection list with selection | As a user, I want to see connections in a clear list format. | The system should display connections in a table with columns for ID, Type, Label, and an "Add to Compare" button. |
| UI002 | Comparison table | As a user, I want to see metadata differences in a clear table format. | The system should display a comparison table with columns for Property, Connection 1 Value, Connection 2 Value, and Difference Status. |
| UI003 | Responsive design | As a user, I want the interface to work on different screen sizes. | The system should adapt the layout for different screen sizes, with horizontal scrolling for wide tables if needed. |
| UI004 | Loading states | As a user, I want to know when data is being loaded. | The system should show loading indicators when fetching connections and during comparison operations. |

## Business Rules

| Requirement ID | Description | User Story | Expected Behavior/Outcome |
|---------------|-------------|------------|---------------------------|
| BR001 | Maximum two connections | As a user, I want to compare exactly two connections at a time. | The system should only allow selection of maximum 2 connections. When a third connection is selected, the first one should be deselected. |
| BR002 | Metadata comparison logic | As a user, I want to see clear differences between connection metadata. | The system should compare metadata properties and highlight differences (added, removed, changed, same). |
| BR003 | Empty state handling | As a user, I want clear feedback when no connections are available. | The system should display a message when no connections are found or when connections fail to load. |