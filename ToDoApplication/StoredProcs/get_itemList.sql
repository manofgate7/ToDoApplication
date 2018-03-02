/*DROP Procedure get_itemList(integer); */
CREATE PROCEDURE dbo.get_itemList
AS
BEGIN
	SELECT
 		ItemID
		, ItemName
		, isCompleted
	FROM tblItems WITH (NOLOCK)
	WHERE isCompleted = 0
 
END